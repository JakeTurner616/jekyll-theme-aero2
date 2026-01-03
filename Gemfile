# frozen_string_literal: true

source "https://rubygems.org"
gemspec

# Required for Jekyll timezone handling on Windows
gem "tzinfo", "~> 2.0"
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Ruby 3.5 will not include logger by default; silence the warning now.
gem "logger", "~> 1.6"

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end
