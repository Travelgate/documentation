// Mapeo de archivos .mdx con los nodos específicos

const FILE_NODE_MAP = {
    //API GRAPHQL SELLERS
// **Hoteles**
"for-sellers/inventory-sellers/inventory-push-graphql-api/masters/hotels-master/create-hotel-master.mdx": ["InventoryHotelMasterCreateInput", "HotelsRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/masters/hotels-master/search-hotels-master.mdx": ["InventoryHotelsMasterSearchFilterInput", "HotelsRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/masters/hotels-master/hotels-master.mdx": ["InventoryHotelMasterFilterInput", "HotelsRs"],
// **Habitaciones**
"for-sellers/inventory-sellers/inventory-push-graphql-api/masters/rooms-master/create-rooms-master.mdx": ["InventoryRoomMasterCreateInput", "RoomsRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/masters/rooms-master/rooms-master.mdx": ["InventoryRoomsMasterFilterInput", "RoomsRs"],
// **Disponibilidad - Ofertas**
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/availability/offers/load-offers-availability.mdx": ["InventoryLoadAvailOffersInput", "AvailOffersRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/availability/offers/retrieve-offers-availability.mdx": ["InventoryAvailOffersInput", "AvailRetrieveRs"],
// **Disponibilidad - Tarifas**
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/availability/rates/load-rate-availability.mdx": ["InventoryAvailRatesLoadInput", "AvailRatesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/availability/rates/retrieve-rate-availability.mdx": ["InventoryAvailRatesInput", "AvailRatesRs"],
// **Disponibilidad - Tarifas Derivadas**
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/availability/rates/load-derived-rates-availability.mdx": ["InventoryLoadAvailDerivedRatesInput", "AvailDerivedRatesRs"],
// **Precios - Suplementos de Régimen**
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/mealplan-supplements/load-mealplan-supplements-price.mdx": ["InventoryLoadPriceMealPlanSupplementsInput", "PriceMealPlanSupplementsRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/mealplan-supplements/retrieve-mealplan-supplements-price.mdx": ["InventoryPriceMealPlanSupplementsInput", "PriceMealPlanSupplementsRs"],
// **Precios - Tarifas**
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-occupancy.mdx": ["InventoryLoadPriceRatesInput", "PriceRatesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-room.mdx": ["InventoryLoadPriceRatesInput", "PriceRatesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-standard-occupancy.mdx": ["InventoryLoadPriceRatesInput", "PriceRatesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/retrieve-rate-price.mdx": ["InventoryPriceRatesInput", "PriceRatesRs"],
// **Configuración - Hoteles**
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/hotels-set-up/create-hotel-set-up.mdx": ["InventoryHotelsSetupCreateInput", "HotelsSetupRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/hotels-set-up/delete-hotel-set-up.mdx": ["InventoryHotelSetupDeleteInput", "HotelsSetupRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/hotels-set-up/hotels-set-up.mdx": ["InventoryHotelSetupFilterInput", "HotelsSetupRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/hotels-set-up/update-hotel-set-up.mdx": ["InventoryHotelsSetupUpdateInput", "HotelsSetupRs"],
// **Configuración - Ofertas**
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/offers-set-up/create-offers-set-up.mdx": ["InventoryOffersSetupCreateInput", "OffersRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/offers-set-up/delete-offers-set-up.mdx": ["InventoryOffersSetupDeleteInput", "OffersRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/offers-set-up/offers-set-up.mdx": ["InventoryOffersSetupFilterInput", "OffersRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/offers-set-up/update-offers-set-up.mdx": ["InventoryOffersSetupUpdateInput", "OffersRs"],
// **Configuración - Tarifas**
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/rates-set-up/create-rates-set-up.mdx": ["InventoryRatesSetupCreateInput", "RatesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/rates-set-up/delete-rates-set-up.mdx": ["InventoryRateSetupDeleteInput", "RatesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/rates-set-up/rates-set-up.mdx": ["InventoryRatesSetupFilterInput", "RatesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/rates-set-up/update-rates-set-up.mdx": ["InventoryRatesSetupUpdateInput", "RatesSetUpRs"],
// **Configuración - Habitaciones**
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/rooms-set-up/create-rooms-set-up.mdx": ["InventoryRoomsSetupCreateInput", "RoomsSetUpRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/rooms-set-up/delete-rooms-set-up.mdx": ["InventoryRoomSetupDeleteInput", "RoomsSetUpRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/rooms-set-up/rooms-set-up.mdx": ["InventoryRoomsSetupFilterInput", "RoomsSetUpRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/set-up/rooms-set-up/update-rooms-set-up.mdx": ["InventoryRoomsSetupUpdateInput", "RoomsSetUpRs"],
// **Datos Estáticos - Localidades**
"for-sellers/inventory-sellers/inventory-push-graphql-api/static-data/localities/create-localities.mdx": ["InventoryLocalitiesCreateInput", "LocalitiesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/static-data/localities/localities.mdx": ["InventoryLocalitiesFilterInput", "LocalitiesRs"],
"for-sellers/inventory-sellers/inventory-push-graphql-api/static-data/localities/search-localities.mdx": ["InventoryLocalitiesSearchFilterInput", "LocalitiesRs"],
// **Datos Estáticos - Categorías de Hotel**
"for-sellers/inventory-sellers/inventory-push-graphql-api/static-data/hotel-categories.mdx": ["InventoryHotelCategoriesFilterInput", "CategoriesRs"],
// **Datos Estáticos - Contextos de Inventario**
"for-sellers/inventory-sellers/inventory-push-graphql-api/static-data/inventory-contexts.mdx": ["InventoryContextsFilterInput", "InventoryContextsRs"],
// **Datos Estáticos - Planes de Comidas**
"for-sellers/inventory-sellers/inventory-push-graphql-api/static-data/mealplans.mdx": ["GetMealPlansRs"],  

  //API GRAPHQL BUYERS
// **Hoteles**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/hotels-master/create-hotel-master.mdx": ["InventoryHotelMasterCreateInput", "HotelsRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/hotels-master/hotels-master.mdx": ["InventoryHotelsMasterSearchFilterInput", "HotelsRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/hotels-master/search-hotels-master.mdx": ["InventoryHotelMasterFilterInput", "HotelsRs"],
// **Habitaciones**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master/create-rooms-master.mdx": ["InventoryRoomMasterCreateInput", "RoomsRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/masters/rooms-master/rooms-master.mdx": ["InventoryRoomsMasterFilterInput", "RoomsRs"],
// **Configuración - Hoteles**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/create-hotel-set-up.mdx": ["InventoryHotelsSetupCreateInput", "HotelsSetupRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/delete-hotel-set-up.mdx": ["InventoryHotelSetupDeleteInput", "HotelsSetupRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/hotels-set-up.mdx": ["InventoryHotelSetupFilterInput", "HotelsSetupRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/update-hotel-set-up.mdx": ["InventoryHotelsSetupUpdateInput", "HotelsSetupRs"],
// **Configuración - Ofertas**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/offers-set-up/create-offers-set-up.mdx": ["InventoryOffersSetupCreateInput", "OffersRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/offers-set-up/delete-offers-set-up.mdx": ["InventoryOffersSetupDeleteInput", "OffersRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/offers-set-up/offers-set-up.mdx": ["InventoryOffersSetupFilterInput", "OffersRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/offers-set-up/update-offers-set-up.mdx": ["InventoryOffersSetupUpdateInput", "OffersRs"],
// **Configuración - Tarifas**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/create-rates-set-up.mdx": ["InventoryRatesSetupCreateInput", "RatesRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/delete-rates-set-up.mdx": ["InventoryRateSetupDeleteInput", "RatesRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/rates-set-up.mdx": ["InventoryRatesSetupFilterInput", "RatesRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/update-rates-set-up.mdx": ["InventoryRateSetupUpdateInput", "RatesSetUpRs"],
// **Configuración - Habitaciones**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/create-rooms-set-up.mdx": ["InventoryRoomsSetupCreateInput", "RoomsSetUpRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/delete-rooms-set-up.mdx": ["InventoryRoomSetupDeleteInput", "RoomsSetUpRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/rooms-set-up.mdx": ["InventoryRoomsSetupFilterInput", "RoomsSetUpRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rooms-set-up/update-rooms-set-up.mdx": ["InventoryRoomsSetupUpdateInput", "RoomsSetUpRs"],
// **Datos Estáticos - Localidades**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/static-data/localities/create-localities.mdx": ["InventoryLocalitiesCreateInput", "LocalitiesRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/static-data/localities/localities.mdx": ["InventoryLocalitiesFilterInput", "LocalitiesRs"],
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/static-data/localities/search-localities.mdx": ["InventoryLocalitiesSearchFilterInput", "LocalitiesRs"],
// **Datos Estáticos - Categorías de Hotel**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/static-data/hotel-categories.mdx": ["InventoryHotelCategoriesFilterInput", "CategoriesRs"],
// **Datos Estáticos - Contextos de Inventario**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/static-data/inventory-contexts.mdx": ["InventoryContextsFilterInput", "InventoryContextsRs"],
// **Datos Estáticos - Planes de Comidas**
"for-buyers/inventory-buyers/inventory-set-up-graphql-api/static-data/mealplans.mdx": ["GetMealPlansRs"]
};

module.exports = FILE_NODE_MAP;