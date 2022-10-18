import React from 'react';
import { motion } from 'framer-motion';

const style = {
  header: 'md:text-2xl text-xl py-4 leading-8 break-words font-semibold'                 
}

const Privacy = () => {
  return (
    <section className='max-w-[1200px] h-full mx-auto'>
      <div className='bg-white h-full w-full rounded-xl p-6 leading-8'>
        <motion.div 
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}>
          <h1 className='md:text-3xl text-xl text-center font-bold'>
            <span className='text-[#6366F1] md:text-5xl text-3xl'>
              Polityka prywatności
            </span>
            <br />
            <p className='p-2 mt-2 leading-snug md:text-xl text-[18px]'>
              opisuje zasady przetwarzania przez nas informacji na Twój temat, w
              tym danych osobowych oraz ciasteczek, czyli tzw. cookies.
            </p>
          </h1>
          <h2 className={style.header}>1. Informacje ogólne</h2>
          Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem
          url: pawelstopka.pl Operatorem serwisu oraz Administratorem danych
          osobowych jest: Paweł Stopka Lubomierska 14, 54-062 Wrocław Adres
          kontaktowy poczty elektronicznej operatora: pawelstopka@gmail.com
          Operator jest Administratorem Twoich danych osobowych w odniesieniu do
          danych podanych dobrowolnie w Serwisie. Serwis wykorzystuje dane
          osobowe w następujących celach: Prowadzenie newslettera Prowadzenie
          systemu komentarzy Prowadzenie rozmów typu chat online Obsługa zapytań
          przez formularz Prezentacja oferty lub informacji Serwis realizuje
          funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w
          następujący sposób: Poprzez dobrowolnie wprowadzone w formularzach
          dane, które zostają wprowadzone do systemów Operatora. Poprzez
          zapisywanie w urządzeniach końcowych plików cookie (tzw.
          „ciasteczka”).
          <h2 className={style.header}>
            2. Wybrane metody ochrony danych stosowane przez Operatora
          </h2>
          Miejsca logowania i wprowadzania danych osobowych są chronione w
          warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane
          logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
          użytkownika i mogą być odczytane jedynie na docelowym serwerze.
          Operator okresowo zmienia swoje hasła administracyjne. W celu ochrony
          danych Operator regularnie wykonuje kopie bezpieczeństwa. Istotnym
          elementem ochrony danych jest regularna aktualizacja wszelkiego
          oprogramowania, wykorzystywanego przez Operatora do przetwarzania
          danych osobowych, co w szczególności oznacza regularne aktualizacje
          komponentów programistycznych. 
          <h2 className={style.header}>3. Hosting</h2>Serwis jest hostowany
          (technicznie utrzymywany) na serwerach operatora: cyberFolks.pl 
          
          <h2 className={style.header}>4.
          Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2> W
          niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane
          osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania
          zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
          Administratorze. Dotyczy to takich grup odbiorców: firma hostingowa na
          zasadzie powierzenia operatorzy płatności operatorzy rozwiązania typu
          chat online Twoje dane osobowe przetwarzane przez Administratora nie
          dłużej, niż jest to konieczne do wykonania związanych z nimi czynności
          określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W
          odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej
          niż przez 3 lata. Przysługuje Ci prawo żądania od Administratora:
          dostępu do danych osobowych Ciebie dotyczących, ich sprostowania,
          usunięcia, ograniczenia przetwarzania, oraz przenoszenia danych.
          Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania
          wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu
          wykonania prawnie uzasadnionych interesów realizowanych przez
          Administratora, w tym profilowania, przy czym prawo sprzeciwu nie
          będzie mogło być wykonane w przypadku istnienia ważnych prawnie
          uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie
          interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub
          obrony roszczeń. Na działania Administratora przysługuje skarga do
          Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193
          Warszawa. Podanie danych osobowych jest dobrowolne, lecz niezbędne do
          obsługi Serwisu. W stosunku do Ciebie mogą być podejmowane czynności
          polegające na zautomatyzowanym podejmowaniu decyzji, w tym
          profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w
          celu prowadzenia przez Administratora marketingu bezpośredniego. Dane
          osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów
          o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza
          teren Unii Europejskiej. 
          
          <h2 className={style.header}>5. Informacje w formularzach</h2> Serwis zbiera
          informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o
          ile zostaną one podane. Serwis może zapisać informacje o parametrach
          połączenia (oznaczenie czasu, adres IP). Serwis, w niektórych
          wypadkach, może zapisać informację ułatwiającą powiązanie danych w
          formularzu z adresem e-mail użytkownika wypełniającego formularz. W
          takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url
          strony zawierającej formularz. Dane podane w formularzu są
          przetwarzane w celu wynikającym z funkcji konkretnego formularza, np.
          w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu
          handlowego, rejestracji usług itp. Każdorazowo kontekst i opis
          formularza w czytelny sposób informuje, do czego on służy. 
          
          <h2 className={style.header}>6. Logi
          Administratora</h2> Informacje zachowaniu użytkowników w serwisie mogą
          podlegać logowaniu. Dane te są wykorzystywane w celu administrowania
          serwisem. 
          
          <p className={style.header}>7. Istotne techniki marketingowe</p> 
          Operator stosuje analizę
          statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z
          siedzibą w USA). Operator nie przekazuje do operatora tej usługi
          danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje
          na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W
          zakresie informacji o preferencjach użytkownika gromadzonych przez
          sieć reklamową Google użytkownik może przeglądać i edytować informacje
          wynikające z plików cookies przy pomocy narzędzia:
          https://www.google.com/ads/preferences/ Operator stosuje techniki
          remarketingowe, pozwalające na dopasowanie przekazów reklamowych do
          zachowania użytkownika na stronie, co może dawać złudzenie, że dane
          osobowe użytkownika są wykorzystywane do jego śledzenia, jednak w
          praktyce nie dochodzi do przekazania żadnych danych osobowych od
          Operatora do operatorom reklam. Technologicznym warunkiem takich
          działań jest włączona obsługa plików cookie. Operator stosuje korzysta
          z piksela Facebooka. Ta technologia powoduje, że serwis Facebook
          (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim
          zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych,
          wobec których sam jest administratorem, Operator nie przekazuje od
          siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa
          bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
          Operator stosuje rozwiązanie badające zachowanie użytkowników poprzez
          tworzenie map ciepła oraz nagrywanie zachowania na stronie. Te
          informacje są anonimizowane zanim zostaną przesłane do operatora
          usługi tak, że nie wie on jakiej osoby fizycznej one dotyczą. W
          szczególności nagrywaniu nie podlegają wpisywane hasła oraz inne dane
          osobowe. Operator stosuje rozwiązanie automatyzujące działanie Serwisu
          w odniesieniu do użytkowników, np. mogące przesłać maila do
          użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on
          zgodę na otrzymywanie korespondencji handlowej od Operatora. 
          
          <h2 className={style.header}>8. Informacja o plikach cookies</h2>
           Serwis korzysta z plików cookies. Pliki
          cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
          szczególności pliki tekstowe, które przechowywane są w urządzeniu
          końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron
          internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony
          internetowej, z której pochodzą, czas przechowywania ich na urządzeniu
          końcowym oraz unikalny numer. Podmiotem zamieszczającym na urządzeniu
          końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich
          dostęp jest operator Serwisu. Pliki cookies wykorzystywane są w
          następujących celach: utrzymanie sesji użytkownika Serwisu (po
          zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie
          Serwisu ponownie wpisywać loginu i hasła; realizacji celów określonych
          powyżej w części “Istotne techniki marketingowe”; W ramach Serwisu
          stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session
          cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są
          plikami tymczasowymi, które przechowywane są w urządzeniu końcowym
          Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub
          wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki
          cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas
          określony w parametrach plików cookies lub do czasu ich usunięcia
          przez Użytkownika. Oprogramowanie do przeglądania stron internetowych
          (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
          przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
          Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie.
          Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe
          jest także automatyczne blokowanie plików cookies Szczegółowe
          informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki
          internetowej. Ograniczenia stosowania plików cookies mogą wpłynąć na
          niektóre funkcjonalności dostępne na stronach internetowych Serwisu.
          Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu
          wykorzystywane mogą być również przez współpracujące z operatorem
          Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc.
          z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter
          (Twitter Inc. z siedzibą w USA). 
          
          <h2 className={style.header}>
          9. Zarządzanie plikami cookies – jak
          w praktyce wyrażać i cofać zgodę? </h2>
          
          Jeśli użytkownik nie chce otrzymywać
          plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że
          wyłączenie obsługi plików cookies niezbędnych dla procesów
          uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika
          może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie
          ze stron www W celu zarządzania ustawienia cookies wybierz z listy
          poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z
          instrukcjami: Edge Internet Explorer Chrome Safari Firefox Opera
          Urządzenia mobilne: Android Safari (iOS) Windows Phone Niniejszy wzór
          polityki jest dostepny bezpłatnie i został wygenerowany na stronie
          cyberfolks.{' '}
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
