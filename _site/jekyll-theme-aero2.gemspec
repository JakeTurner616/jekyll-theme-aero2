# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-aero2"
  spec.version       = "0.1.0"
  spec.authors       = ["Jake Turner"]
  spec.email         = ["open-source@example.com"]

  spec.summary       = "A clean starter Jekyll theme"
  spec.homepage      = "https://github.com/yourname/jekyll-theme-aero2"
  spec.license       = "MIT"

  spec.require_paths = ["lib"]

  # Don’t rely on `git ls-files` (breaks when not in a git repo).
  spec.files = Dir.glob([
    "assets/**/*",
    "_layouts/**/*",
    "_includes/**/*",
    "_sass/**/*",
    "lib/**/*",
    "*.gemspec",
    "LICENSE*",
    "README*"
  ], File::FNM_DOTMATCH).reject { |p| p.end_with?("/.", "/..") }

  spec.add_runtime_dependency "jekyll", ">= 4.3", "< 5.0"
  spec.add_runtime_dependency "jekyll-seo-tag", ">= 2.8"
  spec.add_runtime_dependency "rouge", ">= 4.0"
end
