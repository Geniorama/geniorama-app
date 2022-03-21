'use strict';

/**
 * servicio-hosting service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::servicio-hosting.servicio-hosting');
