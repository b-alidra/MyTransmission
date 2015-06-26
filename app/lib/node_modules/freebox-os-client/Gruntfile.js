'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        complexity: {
            generic: {
                src: ['freebox-os-client.js'],
                options: {
                    errorsOnly: false,
                    cyclometric: 6, // default is 3
                    halstead: 16, // default is 8
                    maintainability: 100 // default is 100
                }
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                '**/*.js',
                '!node_modules/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        watch: {
            js: {
                files: ['**/*.js', '!node_modules/**/*.js'],
                tasks: ['default'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', [
        'complexity',
        'jshint',
        'watch'
    ]);
};
