/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Profesional en ingenieria altamente cualificado y experimentado, con más de 11 años de servicio en diversas unidades especializadas. Experto en realizar investigaciones complejas, coordinar operaciones tácticas y ejercer liderazgo en situaciones de alta presión. Conocido por su excepcional capacidad para la resolución de problemas, su pensamiento estratégico y su dedicación al cumplimiento de la ley. Busco oportunidades para aprovechar mi experiencia en un entorno desafiante donde pueda seguir generando un impacto significativo.</p>";

				const frontmatter = {"title":"about","name":"Gustavo A. Nuñez Vallejo","designation":"Gerente Administrativo y Desarrollador web","location":"Barranquilla - Colombia","pronouns":"","website":"http://tafutza.hn/kos"};
				const file = "C:/Users/TUF GAMING/Desktop/Programacion de tavo/1.Estudios/Astro/Proyecto practica tarjetas de presentacion/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\r\nProfesional en ingenieria altamente cualificado y experimentado, con más de 11 años de servicio en diversas unidades especializadas. Experto en realizar investigaciones complejas, coordinar operaciones tácticas y ejercer liderazgo en situaciones de alta presión. Conocido por su excepcional capacidad para la resolución de problemas, su pensamiento estratégico y su dedicación al cumplimiento de la ley. Busco oportunidades para aprovechar mi experiencia en un entorno desafiante donde pueda seguir generando un impacto significativo.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
