/**
 * Tractus-X -  Digital Product Pass Application
 * 
 * Copyright (c) 2022, 2024 BMW AG
 * Copyright (c) 2022, 2024 Henkel AG & Co. KGaA
 * Copyright (c) 2023, 2024 CGI Deutschland B.V. & Co. KG
 * Copyright (c) 2023, 2024 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the
 * License for the specific language govern in permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import ErrorComponent from "@/components/general/ErrorComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "Home Page",
        component: HomeView,
    },
    {
        path: "/:catchAll(.*)",
        name: "PageNotFound",
        component: ErrorComponent,
    },
    {
        path: "/not-found",
        name: "PageNotFound",
        component: ErrorComponent,
    },
    {
        path: "/:id",
        name: "PassportView",
        component: () => import("@/views/PassportView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory("/passport"),
    routes: routes,
    linkActiveClass: "active",
});

export default router;
