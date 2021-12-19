import React from 'react'

import './index.scss'

export const SponsorButton = ({ sponsorId }) => (
  <div className="sponsor-button">
    <a
      className="stake-button"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://adapools.org/pool/a2d7c530964b52d333cc664b1fc5acb697f1e3281787af54b021215e`}
    >
      <img
        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span>Stake With Genie 지니 풀에서 스테이킹</span>
    </a>
  </div>
)
