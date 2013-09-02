# General
output_style = :expanded
relative_assets = true
project_path = File.dirname(__FILE__) + '/'
env_file = project_path + 'environment.rb'
add_import_path project_path + '../all/public/assets/styles/src/'
lib_dir = project_path + '../../system/lib/'
 
# Sass Paths
http_path = '/'
http_javascripts_path = http_path + 'js/'
http_stylesheets_path = http_path + 'css/'
http_images_path = http_stylesheets_path + 'img/'
http_fonts_path = http_stylesheets_path + 'fonts/'
 
# Sass Directories
javascripts_dir = 'js/'
css_dir = 'css/'
sass_dir = css_dir + 'sass/'
images_dir = css_dir + 'images/'
fonts_dir = css_dir + 'fonts/'