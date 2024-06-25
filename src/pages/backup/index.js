import styles from "../main.module.css"
import Link from 'next/link'

export default () => {

	return(
		<div className={styles.mainContainer}>
			<div className={`${styles.textBox1Tittle} ${styles.tittleAfter}`}>Segurança e Implementação de Backups ⏳</div>
			<p className={styles.firstParagraph}>
Um backup eficiente envolve a cópia dos dados para um local seguro e separado do sistema principal, permitindo a recuperação em caso de perda ou corrupção dos dados originais. Existem várias abordagens para backups, incluindo backups completos, diferenciais e incrementais. Cada método tem suas próprias vantagens e desvantagens, e a escolha do método adequado depende das necessidades específicas da organização e do volume de dados a ser protegido.
			</p>
			<p className={`${styles.paragraphSubPage}`}>
				Os backups completos, que envolvem a cópia de todos os dados em cada execução, oferecem uma recuperação simples e rápida, mas podem ser demorados e consumir muito espaço de armazenamento. Já os backups incrementais e diferenciais são mais eficientes em termos de tempo e espaço, pois apenas copiam as alterações realizadas desde o último backup, mas podem exigir mais passos durante o processo de restauração.
			</p>
			<p className={`${styles.paragraphSubPage}`}>
			A periodicidade dos backups é outro fator crucial. A frequência com que os dados são copiados deve ser determinada com base na importância e na dinâmica das informações. Em ambientes de negócios onde os dados são constantemente atualizados, backups diários ou até mesmo em tempo real podem ser necessários. Por outro lado, para dados menos críticos, uma periodicidade semanal ou mensal pode ser suficiente.
			</p>
			<p className={styles.paragraphSubPage}>
				Armazenar os backups em locais seguros e diversificados é uma prática recomendada para aumentar a segurança. Isso inclui a utilização de locais físicos externos, como servidores em outras instalações, bem como soluções de armazenamento na nuvem. A distribuição geográfica dos backups protege contra desastres locais, como incêndios ou inundações, que poderiam comprometer tanto os dados principais quanto os backups armazenados no mesmo local.
			</p>
			
			<iframe className={styles.videoContainer} width="420" height="345" src="https://www.youtube.com/embed/PcKos2w5u6Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen>
			</iframe>

			<Link href="/" className={`${styles.homeBtn} ${styles.tittleAfter}`}>Home</Link>
		</div>		
	)

}
