

const settings = {
    // Background blur radius in pixels
    background_blur: 3,

    // Fade transition time from 1 video to the next
    transition_time_ms: 2000,
    // Time before the end of the video to queue next video to play
    // Keep this above transition time
    time_before_next: 5000,

    // Each background that can be picked
    // Format { file, volume(0-1)(optional) }
    backgrounds: [
        { file: "./resources/1.mkv" },
        { file: "./resources/2.mkv", volume: 0.5 },
        { file: "./resources/3.mkv" },
        { file: "./resources/4.mkv" },
        { file: "./resources/5.mkv" },
        { file: "./resources/6.mkv" },
        { file: "./resources/7.mkv" },
        { file: "./resources/8.mkv" },
        { file: "./resources/9.mkv" }
    ],
}