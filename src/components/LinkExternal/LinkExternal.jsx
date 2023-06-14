import React from "react";

/**
 * @description Anchor component for external links
 *
 * @param {{href: URL}} props
 * @returns
 */
export function LinkExternal(props) {
  const { href, children, ...rest } = props;

  return (
    <a target="_blank" rel="noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
}
