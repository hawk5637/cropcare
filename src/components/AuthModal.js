export function renderAuthModal() {
  return `
    <div class="modal-backdrop" id="authModalBackdrop">
      <div class="modal-dialog">
        <button class="modal-close-btn" id="closeAuthModalBtn" aria-label="Close modal">
          <i data-lucide="x" class="icon-sm"></i>
        </button>

        <div style="text-align: center; margin-bottom: 24px;">
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--slate-950);">Welcome to CropCare</h3>
          <p style="font-size: 0.88rem; color: var(--slate-600); margin-top: 4px;">
            Access your secure agricultural operating portal
          </p>
        </div>

        <!-- Role Selector Tabs -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 20px;" id="authRoleTabs">
          <button class="filter-btn active auth-role-btn" data-role="farmer" style="padding: 8px 4px; font-size: 0.78rem; text-align: center;">
            🌾 Farmer
          </button>
          <button class="filter-btn auth-role-btn" data-role="buyer" style="padding: 8px 4px; font-size: 0.78rem; text-align: center;">
            🤝 Buyer
          </button>
          <button class="filter-btn auth-role-btn" data-role="supplier" style="padding: 8px 4px; font-size: 0.78rem; text-align: center;">
            🌱 Supplier
          </button>
          <button class="filter-btn auth-role-btn" data-role="agronomist" style="padding: 8px 4px; font-size: 0.78rem; text-align: center;">
            👨‍🌾 Expert
          </button>
        </div>

        <!-- Form Area -->
        <form id="authLoginForm" style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">
              Mobile Number (Aadhaar / Kisan ID Linked)
            </label>
            <div style="display: flex; gap: 8px;">
              <span style="display: flex; align-items: center; padding: 10px 14px; background: var(--slate-100); border: 1px solid var(--border-light); border-radius: var(--radius-sm); font-weight: 600; font-size: 0.9rem;">
                +91
              </span>
              <input 
                type="tel" 
                id="authPhoneInput" 
                value="98765 43210" 
                placeholder="Enter 10-digit mobile number" 
                style="flex: 1; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-sm); outline: none;" 
                required 
              />
            </div>
          </div>

          <div id="otpGroup" style="display: block;">
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">
              One-Time Passcode (OTP)
            </label>
            <input 
              type="text" 
              id="authOtpInput" 
              value="482910" 
              placeholder="Enter 6-digit OTP (Simulated: 482910)" 
              style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-sm); outline: none; letter-spacing: 4px; font-weight: 700;" 
              required 
            />
            <span style="font-size: 0.75rem; color: #16A34A; margin-top: 4px; display: block;">
              ✓ Demo OTP automatically populated for instant login preview
            </span>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 1rem;">
            <i data-lucide="log-in" class="icon-sm"></i>
            <span>Verify & Access Dashboard</span>
          </button>
        </form>

        <div style="margin-top: 20px; text-align: center; font-size: 0.825rem; color: var(--slate-500); border-top: 1px solid var(--border-subtle); padding-top: 14px;">
          Protected by Government e-NAM & Aadhaar KYC protocol. <br />
          Need assistance? Toll-free helpline: <strong>1800-CROPCARE (1800-276-7227)</strong>
        </div>
      </div>
    </div>
  `;
}
