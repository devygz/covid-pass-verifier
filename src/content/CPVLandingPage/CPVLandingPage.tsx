import { LogoGithub16 } from '@carbon/icons-react';
import CPVScanner from '@cpv/components/CPVScanner';

export const CPVLandingPage = (): JSX.Element => (
  <div className="bx--grid cpv-landing-page__grid">
    <div className="bx--row cpv-landing-page__banner">
      <div className="bx--col-lg-16">
        <h1 className="cpv-landing-page__heading">COVID Bilgisi Ekleme</h1>
        <h2 className="cpv-landing-page__subheading">
          Aşı, test ve bağışıklık bilginizi sadece barkodu taratarak ekleyin.
        </h2>
      </div>
    </div>
    <div className="bx--row">
      <div className="bx--col-lg-16">
        <p>
          Aşı / Test / Bağışıklık bilginizi eklemek için Taramaya Başla butonuna dokunun ve aşı kartınızdaki{' '}
          <b>EU Digital COVID Certificate (AB Dijital COVID Sertifikası)</b> bölümünde yer alan karekodu okutun.
        </p>
      </div>
    </div>
    <div className="bx--row cpv-landing-page__scanner">
      <div className="bx--col-lg-16">
        <CPVScanner />
      </div>
    </div>
    <div className="bx--row">
      <div className="bx--col-lg-16 cpv-landing-page__disclaimer">
        <p>
          Tüm veri işlemleri (karekodu tarama, bilgileri işleme ve imza doğrulama) tamamen cihazınız üzerinde, herhangi
          bir veri aktarılmaksızın gerçekleşir. Yalnızca aşı bilginiz (aşının seri numarasının geri döndürülemez
          matematiksel karşılığı) ve karekod sahibinin ad ve soyad bilgisi sunucuya gönderilir. Bu bilgileri istediğiniz
          zaman silebilirsiniz.
        </p>
      </div>
    </div>
    <div className="bx--row">
      <div className="bx--col-lg-8 bx--offset-lg-4 bx--col-sm-2 bx--offset-sm-1 cpv-landing-page__footer">v1.0.0</div>
    </div>
  </div>
);
