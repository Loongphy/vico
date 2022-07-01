module.exports = {
    '**/*.{ts,tsx,js,jsx}': [
        "tsc --noEmit --skipLibCheck",
        "eslint --cache --fix",
    ],
    "**/*.vue": [
        "eslint --cache --fix",
    ]
}