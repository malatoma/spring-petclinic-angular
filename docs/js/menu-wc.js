'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">spring-petclinic-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-39c5137b6e435cea506380f99fbbfafb"' : 'data-target="#xs-components-links-module-AppModule-39c5137b6e435cea506380f99fbbfafb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-39c5137b6e435cea506380f99fbbfafb"' :
                                            'id="xs-components-links-module-AppModule-39c5137b6e435cea506380f99fbbfafb"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-39c5137b6e435cea506380f99fbbfafb"' : 'data-target="#xs-injectables-links-module-AppModule-39c5137b6e435cea506380f99fbbfafb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-39c5137b6e435cea506380f99fbbfafb"' :
                                        'id="xs-injectables-links-module-AppModule-39c5137b6e435cea506380f99fbbfafb"' }>
                                        <li class="link">
                                            <a href="injectables/HttpErrorHandler.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpErrorHandler</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OwnersModule.html" data-type="entity-link">OwnersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OwnersModule-6b40ebfa63b5d49113e909b13ccfd6e4"' : 'data-target="#xs-components-links-module-OwnersModule-6b40ebfa63b5d49113e909b13ccfd6e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OwnersModule-6b40ebfa63b5d49113e909b13ccfd6e4"' :
                                            'id="xs-components-links-module-OwnersModule-6b40ebfa63b5d49113e909b13ccfd6e4"' }>
                                            <li class="link">
                                                <a href="components/OwnerAddComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OwnerAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OwnerDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OwnerDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OwnerEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OwnerEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OwnerListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OwnerListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OwnersModule-6b40ebfa63b5d49113e909b13ccfd6e4"' : 'data-target="#xs-injectables-links-module-OwnersModule-6b40ebfa63b5d49113e909b13ccfd6e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OwnersModule-6b40ebfa63b5d49113e909b13ccfd6e4"' :
                                        'id="xs-injectables-links-module-OwnersModule-6b40ebfa63b5d49113e909b13ccfd6e4"' }>
                                        <li class="link">
                                            <a href="injectables/OwnerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>OwnerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OwnersRoutingModule.html" data-type="entity-link">OwnersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PartsModule.html" data-type="entity-link">PartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PartsModule-f987d2c12a34e6c549cece293fc5a0be"' : 'data-target="#xs-components-links-module-PartsModule-f987d2c12a34e6c549cece293fc5a0be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PartsModule-f987d2c12a34e6c549cece293fc5a0be"' :
                                            'id="xs-components-links-module-PartsModule-f987d2c12a34e6c549cece293fc5a0be"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PetsModule.html" data-type="entity-link">PetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PetsModule-bd2af61ae10e1048bb387f8c2f33b898"' : 'data-target="#xs-components-links-module-PetsModule-bd2af61ae10e1048bb387f8c2f33b898"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PetsModule-bd2af61ae10e1048bb387f8c2f33b898"' :
                                            'id="xs-components-links-module-PetsModule-bd2af61ae10e1048bb387f8c2f33b898"' }>
                                            <li class="link">
                                                <a href="components/PetAddComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PetAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PetEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PetEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PetListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PetListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PetsModule-bd2af61ae10e1048bb387f8c2f33b898"' : 'data-target="#xs-injectables-links-module-PetsModule-bd2af61ae10e1048bb387f8c2f33b898"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PetsModule-bd2af61ae10e1048bb387f8c2f33b898"' :
                                        'id="xs-injectables-links-module-PetsModule-bd2af61ae10e1048bb387f8c2f33b898"' }>
                                        <li class="link">
                                            <a href="injectables/PetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PetsRoutingModule.html" data-type="entity-link">PetsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PetTypesModule.html" data-type="entity-link">PetTypesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PetTypesModule-ca29967277dd9b955e752bd5f131e551"' : 'data-target="#xs-components-links-module-PetTypesModule-ca29967277dd9b955e752bd5f131e551"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PetTypesModule-ca29967277dd9b955e752bd5f131e551"' :
                                            'id="xs-components-links-module-PetTypesModule-ca29967277dd9b955e752bd5f131e551"' }>
                                            <li class="link">
                                                <a href="components/PettypeAddComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PettypeAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PettypeEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PettypeEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PettypeListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PettypeListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PetTypesModule-ca29967277dd9b955e752bd5f131e551"' : 'data-target="#xs-injectables-links-module-PetTypesModule-ca29967277dd9b955e752bd5f131e551"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PetTypesModule-ca29967277dd9b955e752bd5f131e551"' :
                                        'id="xs-injectables-links-module-PetTypesModule-ca29967277dd9b955e752bd5f131e551"' }>
                                        <li class="link">
                                            <a href="injectables/PetTypeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PetTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PettypesRoutingModule.html" data-type="entity-link">PettypesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SpecialtiesModule.html" data-type="entity-link">SpecialtiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpecialtiesModule-180f4b2dc771ec3bfcc17c0d12c56b94"' : 'data-target="#xs-components-links-module-SpecialtiesModule-180f4b2dc771ec3bfcc17c0d12c56b94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpecialtiesModule-180f4b2dc771ec3bfcc17c0d12c56b94"' :
                                            'id="xs-components-links-module-SpecialtiesModule-180f4b2dc771ec3bfcc17c0d12c56b94"' }>
                                            <li class="link">
                                                <a href="components/SpecialtyAddComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpecialtyAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpecialtyEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpecialtyEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpecialtyListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpecialtyListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SpecialtiesModule-180f4b2dc771ec3bfcc17c0d12c56b94"' : 'data-target="#xs-injectables-links-module-SpecialtiesModule-180f4b2dc771ec3bfcc17c0d12c56b94"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpecialtiesModule-180f4b2dc771ec3bfcc17c0d12c56b94"' :
                                        'id="xs-injectables-links-module-SpecialtiesModule-180f4b2dc771ec3bfcc17c0d12c56b94"' }>
                                        <li class="link">
                                            <a href="injectables/SpecialtyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SpecialtyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecialtiesRoutingModule.html" data-type="entity-link">SpecialtiesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestingModule.html" data-type="entity-link">TestingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestingModule-482b78d4d79946f70d2614ff2fbf6732"' : 'data-target="#xs-components-links-module-TestingModule-482b78d4d79946f70d2614ff2fbf6732"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestingModule-482b78d4d79946f70d2614ff2fbf6732"' :
                                            'id="xs-components-links-module-TestingModule-482b78d4d79946f70d2614ff2fbf6732"' }>
                                            <li class="link">
                                                <a href="components/DummyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DummyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RouterOutletStubComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RouterOutletStubComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-TestingModule-482b78d4d79946f70d2614ff2fbf6732"' : 'data-target="#xs-directives-links-module-TestingModule-482b78d4d79946f70d2614ff2fbf6732"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TestingModule-482b78d4d79946f70d2614ff2fbf6732"' :
                                        'id="xs-directives-links-module-TestingModule-482b78d4d79946f70d2614ff2fbf6732"' }>
                                        <li class="link">
                                            <a href="directives/RouterLinkStubDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">RouterLinkStubDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VetsModule.html" data-type="entity-link">VetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VetsModule-1988c0a651a6b9e8c63f0d601c6d847b"' : 'data-target="#xs-components-links-module-VetsModule-1988c0a651a6b9e8c63f0d601c6d847b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VetsModule-1988c0a651a6b9e8c63f0d601c6d847b"' :
                                            'id="xs-components-links-module-VetsModule-1988c0a651a6b9e8c63f0d601c6d847b"' }>
                                            <li class="link">
                                                <a href="components/VetAddComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VetAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VetEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VetEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VetListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VetListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VetsModule-1988c0a651a6b9e8c63f0d601c6d847b"' : 'data-target="#xs-injectables-links-module-VetsModule-1988c0a651a6b9e8c63f0d601c6d847b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VetsModule-1988c0a651a6b9e8c63f0d601c6d847b"' :
                                        'id="xs-injectables-links-module-VetsModule-1988c0a651a6b9e8c63f0d601c6d847b"' }>
                                        <li class="link">
                                            <a href="injectables/VetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VetsRoutingModule.html" data-type="entity-link">VetsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VisitsModule.html" data-type="entity-link">VisitsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VisitsModule-828acbf631263d1850ddb3c002ff4bc7"' : 'data-target="#xs-components-links-module-VisitsModule-828acbf631263d1850ddb3c002ff4bc7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VisitsModule-828acbf631263d1850ddb3c002ff4bc7"' :
                                            'id="xs-components-links-module-VisitsModule-828acbf631263d1850ddb3c002ff4bc7"' }>
                                            <li class="link">
                                                <a href="components/VisitAddComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisitAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisitEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisitEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisitListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisitListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VisitsModule-828acbf631263d1850ddb3c002ff4bc7"' : 'data-target="#xs-injectables-links-module-VisitsModule-828acbf631263d1850ddb3c002ff4bc7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VisitsModule-828acbf631263d1850ddb3c002ff4bc7"' :
                                        'id="xs-injectables-links-module-VisitsModule-828acbf631263d1850ddb3c002ff4bc7"' }>
                                        <li class="link">
                                            <a href="injectables/VisitService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VisitService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisitsRoutingModule.html" data-type="entity-link">VisitsRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HttpErrorHandler.html" data-type="entity-link">HttpErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OwnerService.html" data-type="entity-link">OwnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PetService.html" data-type="entity-link">PetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PetTypeService.html" data-type="entity-link">PetTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpecialtyService.html" data-type="entity-link">SpecialtyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VetService.html" data-type="entity-link">VetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VisitService.html" data-type="entity-link">VisitService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/SpecResolver.html" data-type="entity-link">SpecResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/VetResolver.html" data-type="entity-link">VetResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Owner.html" data-type="entity-link">Owner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pet.html" data-type="entity-link">Pet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PetType.html" data-type="entity-link">PetType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Specialty.html" data-type="entity-link">Specialty</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vet.html" data-type="entity-link">Vet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Visit.html" data-type="entity-link">Visit</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});