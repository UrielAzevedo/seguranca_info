import styles from "./main.module.css"
import Link from 'next/link'

export default () => {
	
	return (

		<div className={styles.mainContainer}>
			<div className={`${styles.tittle} ${styles.tittleAfter}`}>Segurança da Informação</div>
			<div className={`${styles.textBox1Tittle} ${styles.tittleAfter}`}>O que é? 🤔 </div>
			<div className={styles.textBox1}> 
				<p>
			Você sabe o que é a Segurnaça da Informação? Atualmente a quantidade de dados que trafega na internet é a gigantesca, des de dados confidenciais como senhas e email à metadados, como cookies de nagador usados, região de onde se conecta a internet, histórico de pesquisa, etc.. 
				</p>
				<p> 
			Dessa forma a segurança da informação é um termo usado para referir-se ao conjunto de estratégias adotadas para proteger dados contra ameaças, riscos e ataques cibernéticos, que visam comprometer a integridade, confidencialidade e disponibilidade de informações e sistemas.
				</p> 	
				<div className={`${styles.textBox1Tittle} ${styles.tittleAfter}`}>Pilares da segurança da Informação 🏛️			</div>
				<ul id={styles.ul}>
					<li id={styles.li}>
						<div className={styles.liTittle}>Confidencialidade</div>
						<p>
							seu objetivo é a preservação do sigilo dos dados.

							Apenas aqueles que têm a devida autorização podem acessar ou ver a informação em questão.

							A confidencialidade é frequentemente assegurada através de medidas como criptografia, controle de acesso e políticas de privacidade.

							Em resumo, a confidencialidade garante que as informações sejam mantidas em segredo e só sejam acessíveis por indivíduos autorizados.
						</p>
					</li>
				    <li id={styles.li}>
						<div className={styles.liTittle}>Disponibilidade</div>
						<p>
							diz respeito ao direito ao acesso de dados por parte dos usuários que têm autorização de acesso, sempre que necessário.

							Dessa maneira, esse princípio diz que os dados devem estar acessíveis sempre que usuários credenciados precisarem.

							A partir disso, as empresas devem fornecer recursos para que esses usuários autorizados possam ter acesso livre aos dados.
						</p>
					</li>
				    <li id={styles.li}>
						<div className={styles.liTittle}>Integridade</div>
						<p>
							Refere-se, justamente, à necessidade de preservar a integridade das informações compartilhadas ou acessadas por usuários de maneira que elas mantenham a sua originalidade, ou seja, não sejam modificadas. 

							A segurança da informação deve garantir que as informações permaneçam precisas, completas e não sejam alteradas sob nenhuma circunstância.
						</p>
					</li>
				</ul>
			</div>
			<div className={`${styles.textBox1Tittle} ${styles.tittleAfter}`}>Aplicando a Segurança da Informação! 🔐</div>
			<ul id={styles.ul}>
			    <Link href="/senhas" className={`${styles.liAplicacoes} ${styles.tittleAfter}`}>Utilize senhas fortes e seguras</Link>
				<Link href="/fishing" className={`${styles.liAplicacoes} ${styles.tittleAfter}`}>Preste atenção com ataques de fishing, não divulgue seus dados em sites não confiáveis</Link>
				<Link href="/software" className={`${styles.liAplicacoes} ${styles.tittleAfter}`}>Mantenha softwares sempre atualizados para evitar vulnerabilidade</Link>
				<Link href="/backup" className={`${styles.liAplicacoes} ${styles.tittleAfter}`}>Faça backup de dados</Link>
				<Link href="/privacidade" className={`${styles.liAplicacoes} ${styles.tittleAfter}`}>Ajuste configurações de privacidade e acesso a dados nas rededs socias</Link>
			</ul>

			
		</div>


	)
	
}
