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
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          imagesDir: 'images',
        },
        dist: {
          options: {
            outputStyle: 'compressed'
          }
        },
        dev: {
          options: {
            outputStyle: 'expanded'
          }
        }
      },






      //Concat JS files
      concat: {
        dist: {
          src: [
            'javascripts/vendor/*.js',
            'javascripts/foundation/foundation.js',
            'javascripts/foundation/foundation.tooltipsjs',
            'javascripts/foundation/foundation.reveal.js',
            'javascripts/cambridge/*.js',
          ],
          dest: 'build/javascripts/cambridge.js',
        }
      },


      // Uglify JS files
      uglify: {
        options:{
          mangle: false
        },
        dist: {
          src: 'build/javascripts/cambridge.js',
          dest: 'build/javascripts/cambridge.min.js'
        }
      },





      // Image compression
      imagemin: {
        static: {                        
          options: {                       
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

      // Copy files to the build folder ready for upload
      copy: {
        main: {
          src: [
            '*.html',
            'css/*',
            'javascripts/galleria/**/*',
            'javascripts/vendor/*',
          ],
          dest: 'build/',
        },
      },



    // Watch + Livereload
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
      'compass:dist', 'concat','uglify', 'imagemin', 'copy'
   ]);

 	// Default task
  	grunt.registerTask('default', [
      'compass:dev' ,'watch'
   ]);

}
