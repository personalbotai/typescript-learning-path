const fs = require('fs');

const repos = ['typescript-learning-path', 'go-learning-path', 'java-learning-path', 'rust-learning-path', 'cpp-learning-path', 'sql-learning-path'];

for (const repo of repos) {
    const path = `/data/data/com.termux/files/home/${repo}/app.js`;
    if (!fs.existsSync(path)) continue;
    
    let content = fs.readFileSync(path, 'utf8');

    // Fix 1: Map lesson array to use markdown fetch fallback properly
    // The main block where lesson loads is: 
    // if (lesson.content && typeof lesson.content === 'string') { html = ... } else { fallback }
    
    // We will inject a unified Markdown fetch block.
    // Instead of replacing blindly, we'll patch the loadLesson try-catch block for fetching markdown.
    if (content.includes('function escapeHtml')) {
        // Find the "try { ... } catch(e)" inside loadLesson where it sets html
        // This is usually after: let html = '';
        const searchRegex = /let html = '';\s*try \{([\s\S]*?) catch \(e\) \{/g;
        const replaceCode = `let html = '';
    try {
        let md = '';
        if (lesson.mdFile) {
            const res = await fetch(lesson.mdFile);
            if (res.ok) md = await res.text();
        } else if (lesson.slug) {
            // Find physical file: since we don't have direct mapping, use lesson's slug or format
            // Try fetching from lesson.slug
            const res = await fetch('lessons/' + lesson.slug + '.md');
            if (res.ok) md = await res.text();
        }
        
        if (!md && lesson.content && typeof lesson.content === 'string' && lesson.content.length > 50) {
            md = lesson.content;
        }
        
        if (md) {
            if (typeof marked !== 'undefined') {
                marked.setOptions({gfm: true, breaks: true});
                html = marked.parse(md);
            } else {
                html = '<pre>' + escapeHtml(md) + '</pre>';
            }
        } else {
            html = '<h2>' + escapeHtml(lesson.title) + '</h2><p>Materi sedang diperbarui. Silakan gunakan editor di bawah.</p>';
        }
    } catch (e) {`;
        
        content = content.replace(searchRegex, replaceCode);
    }
    
    // Fix 2: Java Quiz map error
    if (repo === 'java-learning-path') {
        content = content.replace(/lesson\.quiz\.map/g, '(Array.isArray(lesson.quiz) ? lesson.quiz : [lesson.quiz]).map');
        content = content.replace(/lesson\.quiz\.forEach/g, '(Array.isArray(lesson.quiz) ? lesson.quiz : [lesson.quiz]).forEach');
    }
    
    fs.writeFileSync(path, content);
    console.log('Patched ' + repo);
}
