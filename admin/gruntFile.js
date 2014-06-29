module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks('grunt-ng-constant');
    grunt.loadNpmTasks('grunt-recess');
//    grunt.loadNpmTasks('grunt-karma');
//    grunt.loadNpmTasks('grunt-html2js');

    // Default task.
    grunt.registerTask('default', ['recess:build']);

    // Project configuration.
    grunt.initConfig({
        distdir: 'dist',
        srcDir: 'src',
        releasedir: '',
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
            ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
        src: {
            less: ['src/less/main.less'], // recess:build doesn't accept ** in its file patterns
            lessWatch: ['src/less/**/*.less']
        },
        clean: ['<%= distdir %>/*'],
        recess: {
            build: {
                files: {
                  'src/css/main.css': ['<%= src.less %>'] },
                options: {
                    compile: true
                }
            }
        },
        watch: {
            all: {
                files: ['src/less/**/*.less'],
                tasks: ['default']
            }
        }
    });

};
