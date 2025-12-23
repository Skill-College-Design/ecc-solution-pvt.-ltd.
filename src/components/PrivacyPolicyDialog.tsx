import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyDialogProps {
  trigger: React.ReactNode;
}

const PrivacyPolicyDialog = ({ trigger }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Last updated on: 22 December 2025 • 16:45:17
          </p>
        </DialogHeader>
        <ScrollArea className="h-[70vh] px-6 pb-6">
          <div className="space-y-6 text-foreground/80">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">a. Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Any information you voluntarily submit through forms or communication</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">b. Non-Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and usage data</li>
                  <li>Cookies and analytics data</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Communicate updates, offers, or important notices</li>
                <li>Analyze website usage and performance</li>
                <li>Ensure security and prevent misuse</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">3. Cookies and Tracking Technologies</h2>
              <p>Our website may use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Enhance user experience</li>
                <li>Analyze traffic and usage patterns</li>
                <li>Remember preferences</li>
              </ul>
              <p>You can control or disable cookies through your browser settings.</p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">4. Sharing of Information</h2>
              <p>We do not sell, trade, or rent your personal information.</p>
              <p>We may share information only:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>With trusted service providers assisting in website or service operations</li>
                <li>When required by law, regulation, or legal process</li>
                <li>To protect our legal rights or prevent fraud</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">5. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your 
                information from unauthorized access, alteration, or disclosure. However, no 
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible 
                for the privacy practices or content of those sites. We encourage you to review 
                their privacy policies.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">7. Your Rights</h2>
              <p>You may:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for communications</li>
              </ul>
              <p>To exercise these rights, contact us using the details below.</p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not 
                knowingly collect personal information from children.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted 
                on this page with an updated revision date.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">10. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please contact:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg space-y-1">
                <p className="font-semibold text-foreground">ECC Solutions Pvt. Ltd.</p>
                <p>Email: ecc.rajkot@gmail.com</p>
                <p>
                  Address: 203 Krishna Con-Arch Complex, Opp. Modern Fast Food, University Road, 
                  Rajkot - 360005, Gujarat, India.
                </p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
