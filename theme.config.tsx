import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
// import Image from 'next/image';

/*
const logo = (
  <Image
    src="/public/assets/logo" 
    alt="Drift Protocol"
    width={200} 
    height={50} 
  />
);
*/

const config: DocsThemeConfig = {
  logo: <span><b> Drift Protocol v2</b></span>,
    sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  project: {
    link: 'https://github.com/drift-labs',
  },
  docsRepositoryBase: 'https://github.com/drift-labs/drift-docs-v2',
  chat: {
    link: 'https://discord.gg/driftprotocol',
  },
  useNextSeoProps(){
    const { asPath } = useRouter()
    if(asPath != '/'){
      return {
        titleTemplate: '%s – Drift Protocol '
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard = 
    route === '/' || !title
    ? 'https://nextra.site/og.jpeg'
    : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Drift brings on-chain, cross-margined perpetual futures to Solana. Making futures DEXs the best way to trade."
        />
        <meta
          name="og:description"
          content="Drift brings on-chain, cross-margined perpetual futures to Solana. Making futures DEXs the best way to trade."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="drift.trade" />
        <meta name="twitter:url" content="https://www.drift.trade/" />
        <meta
          name="og:title"
          content={title ? title + ' – Drift Protocol' : 'Drift Protocol'}
        />
      </>
    )
  },
  footer: {
    text: 'Drift Protocol v2 Documentation',
  },
}

export default config