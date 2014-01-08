module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        stylus: {
            compile: {
                options: {
                    compress: false
                },
                files: {
                    'css/main.css': 'styl/main.styl'
                }
            }
        },
        //------------------------------------------------------------
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '',
                    keepalive: false
                }
            }
        },
        //------------------------------------------------------------
        watch: {
            stylus: {
                files: 'styl/*.styl',
                tasks: ['stylus'],
                options: {
                    interrupt: true
                }
            },
            css: {
                options: {
                    livereload: true
                },
                files: 'css/*.css'
            },
            html: {
                options: {
                    livereload: true
                },
                files: '*.html'
            },
            js: {
                options: {
                    livereload: true
                },
                files: 'js/*.js'
            }
        }
        //------------------------------------------------------------
    });

    // Инициализация плагинов, таски которых мы вызываем
    grunt.registerTask('run', ['connect', 'watch']);
};