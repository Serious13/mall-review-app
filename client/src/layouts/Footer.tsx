export default function Footer() {
    return (
        <div className="footer-nav">        
            <div className="company">
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                    <li><a href="/about">About</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="product">
                <h3 className="font-semibold mb-3">Product</h3>
                <ul className="space-y-2">
                    <li><a href="/features">Features</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/integrations">Integrations</a></li>
                    <li><a href="/docs">Documentation</a></li>
                </ul>
            </div>
            <div className="resources">
                <h3 className="font-semibold mb-3">Resources</h3>
                <ul className="space-y-2">
                    <li><a href="/help">Help Center</a></li>
                    <li><a href="/tutorials">Tutorials</a></li>
                    <li><a href="/guides">Guides</a></li>
                    <li><a href="/status">Status</a></li>
                </ul>
            </div>
            <div className="legal">
                <h3 className="font-semibold mb-3">Legal</h3>
                <ul className="space-y-2">
                    <li><a href="/terms">Terms</a></li>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="/cookies">Cookies</a></li>
                    <li><a href="/security">Security</a></li>
                </ul>
            </div>
        </div>    
    )
}
