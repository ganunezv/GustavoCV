/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Somos una empresa especializada en soluciones de transporte de carga y comercio exterior. Nos comprometemos a brindar un servicio confiable y eficiente. Asegurando que sus mercancias lleguen a su destino de manera segura y puntual. Con experiencia en el sector, ofrecemos asesoria personalizada para optimizar cada envio.</p>";

				const frontmatter = {"title":"Avanti Logistica","date":"11/2022 - Present","url":"https://avantilogistica.com/","url_name":"Avanti Logistica SAS"};
				const file = "C:/Users/TUF GAMING/Desktop/Programacion de tavo/1.Estudios/Astro/Proyecto practica tarjetas de presentacion/astro-cv-esquelete/src/pages/blogs/home-mmouzo.md";
				const url = "/blogs/home-mmouzo";
				function rawContent() {
					return "\r\nSomos una empresa especializada en soluciones de transporte de carga y comercio exterior. Nos comprometemos a brindar un servicio confiable y eficiente. Asegurando que sus mercancias lleguen a su destino de manera segura y puntual. Con experiencia en el sector, ofrecemos asesoria personalizada para optimizar cada envio.\r\n";
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
