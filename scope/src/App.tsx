import { useState } from 'react'
import { FrappeProvider } from 'frappe-react-sdk'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

function App() {
	const [count, setCount] = useState(0)

	// We need to pass sitename only if the Frappe version is v15 or above.

	const getSiteName = () => {
		// @ts-ignore
		if (window.frappe?.boot?.versions?.frappe && (window.frappe.boot.versions.frappe.startsWith('15') || window.frappe.boot.versions.frappe.startsWith('16'))) {
			// @ts-ignore
			return window.frappe?.boot?.sitename ?? import.meta.env.VITE_SITE_NAME
		}
		return import.meta.env.VITE_SITE_NAME

	}

	return (
		<div className="App">
			<Theme
				appearance='dark'
				accentColor='iris'
				panelBackground='translucent'
			>
				<FrappeProvider
					socketPort={import.meta.env.VITE_SOCKET_PORT}
					siteName={getSiteName()}
				>
					<div>
						<h1>Vite + React + Frappe</h1>
						<div className="card">
							<button onClick={() => setCount((count) => count + 1)}>
								count is {count}
							</button>
							<p>
								Edit <code>src/App.jsx</code> and save to test HMR
							</p>
						</div>
						<p className="read-the-docs">
							Click on the Vite and React logos to learn more
						</p>
					</div>
				</FrappeProvider>
			</Theme>
		</div>
	)
}

export default App
