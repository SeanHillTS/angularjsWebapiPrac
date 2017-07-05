module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: { 'wwwroot/app.js': ['Frontend/Scripts/app.js', 'Frontend/Scripts/**/*.js'] }
            }
            
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify']
            }
        },
        minifyHtml:
        {
            //## minifyHtml task configuration goes here ##
            // Html is target
            Html: {
                src: ['Frontend/html/**/*.html'],
                dest: 'wwwroot/html/',
                expand: true,
                flatten: true
            }
        }
    });

    grunt.registerTask('default', ['uglify', 'watch']);
};