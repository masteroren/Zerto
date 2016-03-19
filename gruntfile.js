module.exports = function(grunt){

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        sass: {
            dev:{
                files:[{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/main.scss'],
                    dest: 'app/',
                    ext: '.css'
                }]
            }
        },

        watch:{
            css:{
                files: '**/*.scss',
                tasks: ['sass:dev'],
                options: {
                  livereload: true,
                }
            }
        },

        'http-server': {
            'dev': {
                port: 8080,
                host: "127.0.0.1",
                ext: "html",
                openBrowser : true
            }
        },

    });

    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);

    grunt.registerTask('run', [
        'http-server:dev'
    ])

};