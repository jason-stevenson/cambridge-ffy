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
          ],
          dest: 'build/javascripts/vendor.js',
        }
      },


      // Uglify files
      uglify: {
        options:{
          mangle: false
        },
        dist: {
          files: {
            'build/javascripts/vendor/custom.modernizr.js': 'javascripts/vendor/custom.modernizr.js',
            'build/javascripts/vendor/jquery.js': 'javascripts/vendor/jquery.js',
            'build/javascripts/vendor/zepto.js': 'javascripts/vendor/zepto.js',
            'build/javascripts/foundation/foundation.js': 'javascripts/foundation/foundation.js',
            'build/javascripts/foundation/foundation.tooltips.js': 'javascripts/foundation/foundation.tooltips.js',
            'build/javascripts/foundation/foundation.reveal.js': 'javascripts/foundation/foundation.reveal.js',
            'build/javascripts/galleria/galleria-1.2.9.js': 'javascripts/galleria/galleria-1.2.9.js',
            'build/javascripts/cambridge/main.js': 'javascripts/cambridge/main.js',
            'build/css/app.css': 'css/app.css',

          }
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
            src: ['**/*.{png,jpg,gif,svg}'],
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
            'fonts/*',
            'javascripts/galleria/themes/**/*'
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
      'compass:dist', 'uglify', 'imagemin', 'copy'
   ]);

 	// Default task
  	grunt.registerTask('default', [
      'compass:dev' ,'watch'
   ]);

}
