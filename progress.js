// Progress tracking and achievements for TypeScript Learning Path
const Progress = {
    // Keys for localStorage
    KEYS: {
        COMPLETED_LESSONS: 'ts_completed_lessons',
        QUIZ_SCORES: 'ts_quiz_scores',
        CODE_EXECUTIONS: 'ts_code_executions',
        ACHIEVEMENTS: 'ts_achievements',
        CURRENT_MODULE: 'ts_current_module'
    },

    // Initialize progress from localStorage
    load() {
        this.completedLessons = new Set(JSON.parse(localStorage.getItem(this.KEYS.COMPLETED_LESSONS) || '[]'));
        this.quizScores = JSON.parse(localStorage.getItem(this.KEYS.QUIZ_SCORES) || '{}');
        this.codeExecutions = parseInt(localStorage.getItem(this.KEYS.CODE_EXECUTIONS) || '0');
        this.achievements = new Set(JSON.parse(localStorage.getItem(this.KEYS.ACHIEVEMENTS) || '[]'));
        this.currentModule = parseInt(localStorage.getItem(this.KEYS.CURRENT_MODULE) || '1');
    },

    // Save progress to localStorage
    save() {
        localStorage.setItem(this.KEYS.COMPLETED_LESSONS, JSON.stringify([...this.completedLessons]));
        localStorage.setItem(this.KEYS.QUIZ_SCORES, JSON.stringify(this.quizScores));
        localStorage.setItem(this.KEYS.CODE_EXECUTIONS, this.codeExecutions.toString());
        localStorage.setItem(this.KEYS.ACHIEVEMENTS, JSON.stringify([...this.achievements]));
        localStorage.setItem(this.KEYS.CURRENT_MODULE, this.currentModule.toString());
    },

    // Mark lesson as completed
    completeLesson(moduleId, lessonId) {
        const key = `${moduleId}-${lessonId}`;
        if (!this.completedLessons.has(key)) {
            this.completedLessons.add(key);
            this.save();
            this.checkAchievements();
            return true;
        }
        return false;
    },

    // Check if lesson is completed
    isLessonCompleted(moduleId, lessonId) {
        return this.completedLessons.has(`${moduleId}-${lessonId}`);
    },

    // Record quiz score
    recordQuizScore(moduleId, score) {
        this.quizScores[moduleId] = score;
        this.save();
        this.checkAchievements();
    },

    // Get quiz score for module
    getQuizScore(moduleId) {
        return this.quizScores[moduleId] || 0;
    },

    // Increment code execution count
    incrementCodeExecution() {
        this.codeExecutions++;
        this.save();
        this.checkAchievements();
    },

    // Reset all progress
    reset() {
        this.completedLessons.clear();
        this.quizScores = {};
        this.codeExecutions = 0;
        this.achievements.clear();
        this.currentModule = 1;
        this.save();
    },

    // Get overall progress percentage
    getOverallProgress() {
        let totalLessons = 0;
        let completed = 0;
        MODULES.forEach(module => {
            totalLessons += module.lessons.length;
            module.lessons.forEach(lesson => {
                if (this.completedLessons.has(`${module.id}-${lesson.id}`)) {
                    completed++;
                }
            });
        });
        return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
    },

    // Get total points (simple gamification)
    getTotalPoints() {
        let points = 0;
        this.completedLessons.forEach(() => points += 10);
        Object.values(this.quizScores).forEach(score => points += Math.floor(score / 10));
        this.achievements.forEach(() => points += 50);
        return points;
    },

    // Achievement definitions and checking
    checkAchievements() {
        const newAchievements = [];

        if (this.completedLessons.size >= 1 && !this.achievements.has('first_step')) {
            this.achievements.add('first_step');
            newAchievements.push('First Step - Complete your first lesson');
        }

        if (Object.keys(this.quizScores).length >= 5 && !this.achievements.has('quiz_master')) {
            const allPerfect = Object.values(this.quizScores).every(score => score >= 100);
            if (allPerfect) {
                this.achievements.add('quiz_master');
                newAchievements.push('Quiz Master - Pass 5 quizzes with 100%');
            }
        }

        if (this.codeExecutions >= 50 && !this.achievements.has('code_runner')) {
            this.achievements.add('code_runner');
            newAchievements.push('Code Runner - Execute 50 code examples');
        }

        // Check module completion
        MODULES.forEach(module => {
            const allLessonsCompleted = module.lessons.every(l => this.completedLessons.has(`${module.id}-${l.id}`));
            if (allLessonsCompleted && !this.achievements.has(`module_${module.id}_complete`)) {
                this.achievements.add(`module_${module.id}_complete`);
                newAchievements.push(`Module ${module.id} Complete - Finished all lessons in a module`);
            }
        });

        if (newAchievements.length > 0) {
            this.save();
            // Notify UI to show toast
            window.dispatchEvent(new CustomEvent('achievements-unlocked', { detail: newAchievements }));
        }
    },

    // Get achievement metadata
    getAchievementInfo(id) {
        const achievements = {
            first_step: { title: 'First Step', icon: 'fa-baby', desc: 'Complete your first lesson' },
            quiz_master: { title: 'Quiz Master', icon: 'fa-brain', desc: 'Pass 5 quizzes with 100%' },
            code_runner: { title: 'Code Runner', icon: 'fa-code', desc: 'Execute 50 code examples' },
            completionist: { title: 'Completionist', icon: 'fa-check-double', desc: 'Finish all lessons in a module' }
        };
        return achievements[id] || null;
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    Progress.load();
    // Listen for achievement unlocks to show toast
    window.addEventListener('achievements-unlocked', (e) => {
        e.detail.forEach(msg => {
            showAchievementToast(msg);
        });
    });
});
