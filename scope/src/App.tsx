import { FrappeProvider } from 'frappe-react-sdk'
import Login from '@/pages/auth/Login';
import { Toaster } from '@/components/ui/sonner';
import './index.css'

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
			<FrappeProvider
				socketPort={import.meta.env.VITE_SOCKET_PORT}
				siteName={getSiteName()}
			>
				<Login />

				<Toaster />
			</FrappeProvider>
		</div>
	)
}

export default App
