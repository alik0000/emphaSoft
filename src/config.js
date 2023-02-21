/**
 * Top level app config
 */

export default {
    name: 'Тестовое задание по vue 3.0.0',

    // Application mode, possible options: srr, spa, static.
    // See more about mode https://nuxtjs.org/docs/configuration-glossary/configuration-mode
    mode: 'spa',

    // Responsive module
    responsive: {

        // Responsive viewport breakpoints:
        // laptop, tablet, mobile.
        // Please duplicate variables in style variables.
        breakpoints: {
            laptop: 1440,
            tablet: 1023,
            mobile: 767,
        },

        // Viewport parameters
        viewport: {
            width: 1920,
            height: 1080,
            centerX: 1920 / 2,
            centerY: 1080 / 2,
            aspectRatio: 1920 / 2,
            isDesktop: true,
            isLaptop: false,
            isTablet: false,
            isMobile: false,
            isHorizontal: false, // true if mobile in horizontal position
            size: 'desktop',
        },
    },

    // Container defaults
    container: {
        default: 'md',
        lg: '100%',
        md: '1280',
        sm: '980',
        gutters: {
            desktop: '120',
            laptop: '80',
            tablet: '80',
            mobile: '40',
        },
    },

}