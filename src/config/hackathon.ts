export const HACKATHON_CONFIG = {
    // SET THIS TO 'true' TO UNLOCK THE CHALLENGES FOR EVERYONE GLOBALLY
    // When true: The "Enter" button is hidden, and problems are shown immediately.
    // When false: Users must click the lock button 3 times to unlock it locally.
    isAppUnlocked: false,

    // SET THIS TO 'true' TO SHOW THE COUNTDOWN TIMER
    // When true: Users see the countdown timer before problems are revealed
    // When false: Problems are shown directly without any countdown or unlock button
    showCountdown: true,

    // Animation settings (only used when showCountdown is true)
    countdownDuration: 10, // seconds
    clicksToUnlock: 1,     // clicks required
};
