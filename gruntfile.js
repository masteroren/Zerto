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
                tasks: ['sass:dev']
            }
        }

    });

    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);

};