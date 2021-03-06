import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { EditorsList } from '../components/editors-list';
import { Depliant } from '../components/depliant/depliant';
import { TeamMembersList } from '../components/team-members-list/team-members-list';

const IndexPage = ({ location, data: { allStrapiEditore: editorsData, strapiDepliant: depliantData, allStrapiTeamMember: teamMembersData } }) => (
	<Layout location={location}>
		<SEO title="Home" />
		<div id="page-wrapper">
			<main role="main">
				<article>
					<header className="section-top-padding">
						<div className="line text-center">
							<h1
								className="text-dark text-s-size-30 text-m-size-40 text-l-size-headline text-thin text-line-height-1"
							>
								Checchi srl
							</h1>
							<p className="margin-bottom-0 text-size-16 text-dark">
								Dal 1955… maestri di qualità!
							</p>
						</div>
					</header>
					<Depliant data={depliantData} />
					<section className="section-top-padding ">
						<div className="line">
							<div className="margin">
								<div className="s-12 m-12 l-4 margin-m-bottom">
									<img src="https://res.cloudinary.com/djsb71n23/image/upload/v1582481156/checchisrl/checchi-srl-libri-scolastici-massarosa-lucca_dygppj.jpg" alt="Checchi srl magazzino libri scolastici" className="margin-bottom" />
									<h2>Libri scolastici</h2>
									<p className="margin-bottom">
										Rappresentanza e distribuzione di testi scolastici e
										parascolastici per le scuole dell’infanzia e primarie
									</p>
								</div>
								<div className="s-12 m-12 l-4 margin-m-bottom">
									<img src="https://res.cloudinary.com/djsb71n23/image/upload/v1582480749/checchisrl/checchi-srl-centro-didattico-maestre-maestri-massarosa_oouo0h.jpg" alt="Checchi srl cartoleria e giocattoli" className="margin-bottom" />
									<h2>Cartoleria</h2>
									<p className="margin-bottom">
										Da oltre 50 anni la cartolibreria Checchi offre un servizio
										attento e qualificato alle famiglie, ai ragazzi e al mondo
										della scuola.
									</p>
								</div>
								<div className="s-12 m-12 l-4 margin-m-bottom">
									<img src="https://res.cloudinary.com/djsb71n23/image/upload/v1582480749/checchisrl/checchi-srl-cartoleria-regali-giocattoli-massarosa_g99off.jpg" alt="Checchi srl centro didattico" className="margin-bottom" />
									<h2>Centro didattico</h2>
									<p className="margin-bottom">
										Uno spazio accogliente e di libero accesso ad uso esclusivo
										dei docenti che possono così consultare libri e guide,
										vedere dvd o ascoltare cd.
									</p>
								</div>
							</div>
						</div>
					</section>
					<TeamMembersList list={teamMembersData} />
					<EditorsList list={editorsData} />
				</article>
			</main>
		</div>
	</Layout>
);

export default IndexPage;

export const pageQuery = graphql`  
  query HomeQuery {
		strapiDepliant {
			anno
      url
      file_depliant {
        absolutePath
      }
			image {
				childImageSharp {
					fluid(maxWidth: 230) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
    allStrapiEditore {
      edges {
        node {
          id
          immagine {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nome
        }
      }
    }
		allStrapiTeamMember {
			edges {
				node {
					id
					nome
					ruolo
					immagine {
						childImageSharp {
							fluid(maxWidth: 400) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
  }
`;