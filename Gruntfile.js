module.exports = function (grunt) {

    var srcDir = 'src';
    var buildDir = 'www';
    var nd_modules = 'node_modules';

    grunt.initConfig({
        jshint: {
            options: {
                esversion: 6,
                bitwise: true,
                curly: true,
                asi: false
            },
            all: 'src/**/**/*.js'
        },
        watch: {
            files: './src/views/*.html',
            tasks: ['build']
        },
        clean: {
            all: {
                src: [buildDir]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        './src/views/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "."
                    }
                }
            }
        },
        copy: {
            all: {
                cwd: srcDir,
                src: ['**', '!**/*-spec.js'],
                dest: buildDir,
                expand: true,
                options: {
                    processContentExclude: ['**/*.{png,gif,jpg,ico,psd}']
                }
            },
            angular: {
                cwd: nd_modules + '/angular/',
                src: ['angular.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            angularRoutes: {
                cwd: nd_modules + '/angular-route/',
                src: ['angular-route.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            bootstrap: {
                cwd: nd_modules + '/bootstrap/dist/js/',
                src: ['bootstrap.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            bootstrapCss: {
                cwd: nd_modules + '/bootstrap/dist/css/',
                src: ['bootstrap.min.css'],
                dest: buildDir + '/assets/',
                expand: true
            },
            jquery: {
                cwd: nd_modules + '/jquery/dist/',
                src: ['jquery.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            },
            popper: {
                cwd: nd_modules + '/popper.js/dist/',
                src: ['popper.min.js'],
                dest: buildDir + '/assets/',
                expand: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build', ['jshint:all', 'clean', 'copy']);
    grunt.registerTask('default', ['jshint:all', 'clean', 'copy', 'browserSync', 'watch']);

};