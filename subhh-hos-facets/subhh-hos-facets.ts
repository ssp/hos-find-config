config.contentObjectExceptionHandler = 0

#
# Example configuration that sets up facets and localization
# to only render facet localizations using the
# s:find.localizedFacetData ViewHelper.
#

plugin.tx_find {
    settings {
        connections.default.options {
            host = 127.0.0.1
            port = 8983
            path = /solr/hos
        }

        queryFields {
        }

        facets {
            10 {
                id = collection
                field = collection
                fetchMaximum = 1000
            }

            90 {
                id = type
                field = resourceType
                fetchMaximum = 1000
            }

            100 {
                id = language
                field = language
                fetchMaximum = 1000
            }
        }

        languageRootPath = typo3conf/find/i18n/
    }

    view {
        partialRootPaths {
        }

        templateRootPaths {
            20 = typo3conf/find/subhh-hos-facets/Templates
        }
    }

}
