import { FrappeProvider } from 'frappe-react-sdk'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Login from './pages/auth/Login';

function App() {

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
					<Login />
				</FrappeProvider>
			</Theme>
		</div>
	)
}

export default App
