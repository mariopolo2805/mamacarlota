# Expone variables de entorno a las plantillas Liquid como site.<clave>.
# En Vercel se definen en Project Settings → Environment Variables.
module Mamacarlota
  class EnvGenerator < Jekyll::Generator
    priority :highest

    def generate(site)
      key = ENV['GOOGLE_MAPS_API_KEY']
      Jekyll.logger.warn 'Env:', 'GOOGLE_MAPS_API_KEY no definida; el mapa no cargará' if key.to_s.empty?
      site.config['google_maps_api_key'] = key
    end
  end
end
