import { cleanLink } from './util'

import Link from './link'

export default function Image(props) {
	return (
		<Link url={props.url} blank>
			<img
				src={props.url.replace(cleanLink, '')}
				alt={props.url}
				title={props.url}
				onload={props.scroll}
			/>
		</Link>
	)
}
