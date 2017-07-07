module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: { 'wwwroot/app.js': ['Frontend/Scripts/app.js', 'Frontend/Scripts/**/*.js'] }
            }
            
        },

        watch:{
            options: {
                livereload: true,
            },
            css: {
                files: ['Frontend/Styles/**/*.css'],
                tasks: ['cssmin']
            },
            html: {
                files: ['Frontend/ Html/*.html'],
                tasks: ['minifyHtml']
            },
            scripts: {
                    files: ['Frontend/Scripts/**/*.js', ],
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
            ,
            //Html: {
            //    src: ['Frontend/index.html'],
            //    dest: 'wwwroot/index.html',
            //    expand: true,
            //    flatten: false
            //}
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'wwwroot/style.css': ['Frontend/Styles/**/*.css']
                }
            }
        }
    });

    grunt.registerTask('default', ['uglify', 'watch']);
};