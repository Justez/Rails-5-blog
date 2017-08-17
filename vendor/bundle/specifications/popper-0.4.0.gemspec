# -*- encoding: utf-8 -*-
# stub: popper 0.4.0 ruby lib

Gem::Specification.new do |s|
  s.name = "popper".freeze
  s.version = "0.4.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["pyama86".freeze]
  s.bindir = "exe".freeze
  s.date = "2016-10-18"
  s.description = "email notification tool".freeze
  s.email = ["pyama@pepabo.com".freeze]
  s.executables = ["popper".freeze]
  s.files = ["exe/popper".freeze]
  s.homepage = "http://ten-snapon.com".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.5.2".freeze
  s.summary = "email notification tool".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<thor>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<slack-notifier>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<toml>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<mail>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<octokit>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
    else
      s.add_dependency(%q<thor>.freeze, [">= 0"])
      s.add_dependency(%q<slack-notifier>.freeze, [">= 0"])
      s.add_dependency(%q<toml>.freeze, [">= 0"])
      s.add_dependency(%q<mail>.freeze, [">= 0"])
      s.add_dependency(%q<octokit>.freeze, [">= 0"])
      s.add_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<thor>.freeze, [">= 0"])
    s.add_dependency(%q<slack-notifier>.freeze, [">= 0"])
    s.add_dependency(%q<toml>.freeze, [">= 0"])
    s.add_dependency(%q<mail>.freeze, [">= 0"])
    s.add_dependency(%q<octokit>.freeze, [">= 0"])
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
  end
end
