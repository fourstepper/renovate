module.exports = {
    platform: 'github',

    repositories: [
        // Personal
        'fourstepper/renovate',
        'fourstepper/robinopletal.com',
        // Qweebs
        'qweebs/qweebs-terraform',
        'qweebs/qweebs-ansible',
    ],

    requireConfig: true,
    onboarding: true,
    binarySource: 'install',
    onboardingConfig: {
        extends: ['config:base', ':maintainLockFilesMonthly'],
        prConcurrentLimit: 5,
    },

    enabledManagers: [
        'dockerfile',
        'docker-compose',
        'github-actions',
        'ansible',
        'terraform'
    ],
};
