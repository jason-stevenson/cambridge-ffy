/*

TO DO
==============
Implement CSSmin instead of Compass compressed
Rename produciton.js and remove uncompreseed version

*/

module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),



      // Compass
      compass: {
        dev: {
          options: {
            config: 'config.rb',
            force: true
          }
        }
      },

      //Concat JS files
      concat: {
        dist: {
          src: [
            'javascripts/**/*.js',
          ],
          dest: 'build/js/production.js',
        }
      },

      // Uglify JS files
      uglify: {
        dist: {
          src: 'build/js/production.js',
          dest: 'build/js/production.min.js'
        }
      },

      // Image compression
      imagemin: {
        static: {                          // Target
          options: {                       // Target options
            optimizationLevel: 6
          }
        },
        dynamic: {
          files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/images'
          }]
        }
      },

		watch: {
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['compass:dev']
		},

		livereload: {
			files: ['*.html', 'sass/*.scss', 'sass/**/*.scss', 'css/*.css', 'images/*', 'javascripts/**/*.js'],
				options: {
					livereload: true
				}
			},
		}




    });




   // Deploy task
 	grunt.registerTask('deploy', [
      'concat','uglify', 'imagemin'
   ]);

 	// Default task
  	grunt.registerTask('default', [
      'compass:dev' ,'watch'
   ]);

}
