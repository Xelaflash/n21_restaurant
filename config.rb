# Load Sass from node_modules
config[:sass_assets_paths] << File.join(root, 'node_modules')

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :external_pipeline,
  name: :webpack,
  command: build? ? 'yarn run build' : 'yarn run start',
  source: 'dist',
  latency: 1

# ------ Uncomment and adapt if you want to use i18n ------
# activate :i18n, mount_at_root: :fr, langs: [:fr, :en]

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  set      :debug_assets, true
  activate :livereload
  activate :pry
end

configure :build do
  activate :minify_css
  # ------ We commented this command as it prevented us to deploy our Middleman project on GitHub Pages ------
  # activate :minify_javascript
  activate :minify_html, remove_input_attributes: false
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
