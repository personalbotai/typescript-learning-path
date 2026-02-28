// Audit script for TypeScript Learning Path
const fs = require('fs');
const path = require('path');

// Read modules.js to extract lesson slugs
const modulesContent = fs.readFileSync(path.join(__dirname, 'modules.js'), 'utf8');
const MODULES = eval(modulesContent.replace('window.MODULES = MODULES;', 'module.exports = MODULES;'));

// Extract all slugs
const allSlugs = [];
MODULES.forEach(module => {
    module.lessons.forEach(lesson => {
        allSlugs.push(lesson.slug);
    });
});

// Get existing HTML files
const lessonsDir = path.join(__dirname, 'lessons');
const existingFiles = fs.readdirSync(lessonsDir).filter(file => file.endsWith('.html'));

// Analyze each file
const placeholderFiles = [];
const realContentFiles = [];
const fileSizes = {};

existingFiles.forEach(file => {
    const filePath = path.join(lessonsDir, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    fileSizes[file] = size;
    
    // Read file content to check for placeholder text
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's likely a placeholder (small size or contains placeholder patterns)
    const isPlaceholder = size < 5000 || 
                         content.includes('PLACEHOLDER') || 
                         content.includes('placeholder') ||
                         content.includes('TODO') ||
                         content.includes('To be added') ||
                         content.includes('Coming soon') ||
                         content.includes('Lorem ipsum') ||
                         content.includes('placeholder-content') ||
                         content.includes('<!-- Placeholder -->') ||
                         content.includes('<!-- TODO -->');
    
    if (isPlaceholder) {
        placeholderFiles.push(file);
    } else {
        realContentFiles.push(file);
    }
});

// Find missing slugs
const existingSlugs = existingFiles.map(file => file.replace('.html', ''));
const missingSlugs = allSlugs.filter(slug => !existingSlugs.includes(slug));

// Calculate completion metrics
const totalExpected = allSlugs.length;
const filesExist = existingFiles.length;
const realContent = realContentFiles.length;
const placeholders = placeholderFiles.length;
const missing = missingSlugs.length;
const completionPercentage = (realContent / totalExpected * 100).toFixed(2);

// Group by modules
const moduleStats = MODULES.map(module => {
    const moduleSlugs = module.lessons.map(l => l.slug);
    const moduleExisting = moduleSlugs.filter(slug => existingSlugs.includes(slug));
    const moduleReal = moduleExisting.filter(slug => {
        const file = slug + '.html';
        return !placeholderFiles.includes(file);
    });
    const moduleMissing = moduleSlugs.filter(slug => !existingSlugs.includes(slug));
    
    return {
        title: module.title,
        total: moduleSlugs.length,
        existing: moduleExisting.length,
        real: moduleReal.length,
        missing: moduleMissing.length,
        missingSlugs: moduleMissing
    };
});

const completeModules = moduleStats.filter(m => m.missing === 0).map(m => m.title);
const incompleteModules = moduleStats.filter(m => m.missing > 0).map(m => ({
    title: m.title,
    missingCount: m.missing,
    missingSlugs: m.missingSlugs
}));

// Generate report
console.log('=== TypeScript Learning Path Audit Report ===\n');
console.log(`Total expected lessons: ${totalExpected}`);
console.log(`Files exist: ${filesExist}`);
console.log(`Real content (>5KB): ${realContent}`);
console.log(`Placeholder files: ${placeholders}`);
console.log(`Missing: ${missing}`);
console.log(`Completion %: ${completionPercentage}%\n`);

console.log('--- Missing slugs ---');
console.log(missingSlugs.length > 0 ? missingSlugs : 'None');
console.log('');

console.log('--- Placeholder files ---');
console.log(placeholderFiles.length > 0 ? placeholderFiles : 'None');
console.log('');

console.log('--- Complete modules ---');
console.log(completeModules.length > 0 ? completeModules : 'None');
console.log('');

console.log('--- Incomplete modules ---');
incompleteModules.forEach(m => {
    console.log(`${m.title} (${m.missingCount} missing):`);
    console.log(`  ${m.missingSlugs.join(', ')}`);
});

// Save detailed report to file
const report = {
    summary: {
        totalExpected,
        filesExist,
        realContent,
        placeholders,
        missing,
        completionPercentage: parseFloat(completionPercentage)
    },
    missingSlugs,
    placeholderFiles,
    completeModules,
    incompleteModules,
    moduleStats,
    fileDetails: existingFiles.map(file => ({
        file,
        size: fileSizes[file],
        isPlaceholder: placeholderFiles.includes(file)
    }))
};

fs.writeFileSync(
    path.join(__dirname, 'audit-report.json'),
    JSON.stringify(report, null, 2)
);
console.log('\nDetailed report saved to audit-report.json');