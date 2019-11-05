<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:html="http://www.w3.org/TR/REC-html40"
	xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>Sample Funeral Home - Sitemap</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				<style type="text/css">
					body, html {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; } li { padding: 0.25em 0; font-size: 1em;
					}

					a {
						color: #000;
					}
					table {
						border: none;
						border-collapse: collapse;
						width: 100%
					}
					th {
						text-align: left;
						padding-right: 30px;
						font-size: 11px;
					}
					thead th {
						border-bottom: 1px solid #7d878a;
						cursor: pointer;
					}
					td {
						font-size:11px;
						padding: 5px;
					}
					tr:nth-child(odd) td {
						background-color: rgba(0,0,0,0.04);
					}
					tr:hover td {
						background-color: #e2edf2;
					}

					#content {
						margin: 0 auto;
						padding: 2% 5%;
						max-width: 800px;
					}

					.desc {
						margin: 18px 3px;
						line-height: 1.2em;
					}
				</style>
			</head>
			<body>
				<h2>Sitemap</h2>
				<p>
					You can use our sitemap to easily navigate to any section of our website.
					If you still cannot find the information you need don't hesitate to <a href="https://m.me/bokasolutions">message</a> or <a href="mailto:wayne@bokasolutions.com">email</a> our web developer.
				</p>

				<xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
					<table id="sitemap" cellpadding="3">
						<thead>
							<tr>
								<th width="75%">Sitemap</th>
								<th width="25%">Last Modified</th>
							</tr>
						</thead>
						<tbody>
							<xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
								<xsl:variable name="sitemapURL">
									<xsl:value-of select="sitemap:loc"/>
								</xsl:variable>
								<tr>
									<td>
										<a href="{$sitemapURL}">
											<xsl:value-of select="sitemap:loc"/>
										</a>
									</td>
									<td>
										<xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
									</td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>
				</xsl:if>
				<xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
					<p class="desc">
						<a href="{{blog-url}}" class="back-link">&#8592; Back to index</a>
					</p>
					<table id="sitemap" cellpadding="3">
						<thead>
							<tr>
								<th width="70%">URL (<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
 total)</th>
								<th width="15%">Images</th>
								<th title="Last Modification Time" width="15%">Last Modified</th>
							</tr>
						</thead>
						<tbody>
							<xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
							<xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
							<xsl:for-each select="sitemap:urlset/sitemap:url">
								<tr>
									<td>
										<xsl:variable name="itemURL">
											<xsl:value-of select="sitemap:loc"/>
										</xsl:variable>
										<a href="{$itemURL}">
											<xsl:value-of select="sitemap:loc"/>
										</a>
									</td>
									<td>
										<xsl:value-of select="count(image:image)"/>
									</td>
									<td>
										<xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
									</td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>
					<p class="desc">
						<a href="{{blog-url}}" class="back-link">&#8592; Back to index</a>
					</p>
				</xsl:if>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
