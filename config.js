module.exports = {
    platform: 'github',

    repositories: [
        'fourstepper/renovate',
        'fourstepper/robinopletal.com',
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
    ],
};
