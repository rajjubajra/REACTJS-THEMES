const {src, dest, watch, series} = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

/** IMPORTANT: 
 * Change working project Folder 
 * in following "src" and "watch" */



function moveFiles(){
  return src('./tw3_profile_02/build/**/*.*')
  .pipe(dest('./tw3-profile-02'))
}

function watchTask(){
  watch('./tw3_profile_02/build/**/*.*');
}

//default gulp
exports.default = series(moveFiles);