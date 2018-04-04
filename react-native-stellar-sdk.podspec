require 'json'
pjson = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.name            = "react-native-stellar-sdk"
  s.version         = pjson["version"]
  s.homepage        = "https://github.com/pigzbe/react-native-stellar-sdk"
  s.summary         = pjson["description"]
  s.license         = pjson["license"]
  s.author          = { "Ian McGregor" => "ian@mcgregor.codes" }
  s.platform        = :ios, "9.0"
  s.source          = { :git => "https://github.com/pigzbe/react-native-stellar-sdk.git", :tag => "#{s.version}" }
  s.source_files    = 'node_modules/react-native-randombytes/*.{h,m}'

  s.dependency 'React'

end
