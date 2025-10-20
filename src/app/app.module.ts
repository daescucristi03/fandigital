import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermsOfUseComponent } from './pages/legal/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './pages/legal/privacy-policy/privacy-policy.component';
import { LegalComponentsComponent } from './pages/legal/legal-components/legal-components.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { ProductComponent } from './pages/store/product/product.component';
import { StoreComponent } from './pages/store/store/store.component';
import { CartComponent } from './pages/store/cart/cart.component';
import { CheckoutComponent } from './pages/store/checkout/checkout.component';
import { HorizontalContainerComponent } from './components/misc/containers/horizontal-container/horizontal-container.component';
import { VerticalContainerComponent } from './components/misc/containers/vertical-container/vertical-container.component';
import { CarouselContainerComponent } from './components/misc/containers/carousel-container/carousel-container.component';
import { AccordeonContainerComponent } from './components/misc/containers/accordeon-container/accordeon-container.component';
import { IconBoxComponent } from './components/misc/elements/icon-box/icon-box.component';
import { ProductBoxComponent } from './components/misc/elements/product-box/product-box.component';
import { TextBoxComponent } from './components/misc/elements/text-box/text-box.component';
import { AboutUsComponent } from './pages/misc/about-us/about-us.component';
import { ContactComponent } from './pages/misc/contact/contact.component';
import { TeamComponent } from './pages/misc/team/team.component';
import { ContactFormComponent } from './components/misc/forms/contact-form/contact-form.component';
import { NewsletterFormComponent } from './components/misc/forms/newsletter-form/newsletter-form.component';
import { SeparatorComponent } from './components/misc/separators/separator/separator.component';
import { OurStoryComponent } from './components/sections/our-story/our-story.component';
import { CursorComponent } from './components/misc/cursor/cursor.component';
import { BestSellersComponent } from './components/sections/best-sellers/best-sellers.component';
import { TestimonialsComponent } from './components/sections/testimonials/testimonials.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    LegalComponentsComponent,
    ProfileComponent,
    ResetPasswordComponent,
    ProductComponent,
    StoreComponent,
    CartComponent,
    CheckoutComponent,
    HorizontalContainerComponent,
    VerticalContainerComponent,
    CarouselContainerComponent,
    AccordeonContainerComponent,
    IconBoxComponent,
    ProductBoxComponent,
    TextBoxComponent,
    AboutUsComponent,
    ContactComponent,
    TeamComponent,
    ContactFormComponent,
    NewsletterFormComponent,
    SeparatorComponent,
    OurStoryComponent,
    CursorComponent,
    BestSellersComponent,
    TestimonialsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
