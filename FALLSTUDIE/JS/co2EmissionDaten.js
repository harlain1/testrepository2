const co2EmissionDaten = [
    {
      land: "Deutschland",
      unternehmen: "Volkswagen",
      co2Emissions: "1000"
    },
    {
      land: "USA",
      unternehmen: "Tesla",
      co2Emissions: "500"
    },
    {
      land: "China",
      unternehmen: "BYD",
      co2Emissions: "800"
    },
    {
      land: "Indien",
      unternehmen: "BYD",
      co2Emissions: "1700"
    },
    {
      land: "Japan",
      unternehmen: "Toyota",
      co2Emissions: "900"
    },
    {
      land: "Frankreich",
      unternehmen: "Renault",
      co2Emissions: "600"
    },
    {
        land: "Deutschland",
        unternehmen: "Mercedes",
        co2Emissions: "900"
      },
    {
      land: "Kanada",
      unternehmen: "Bombardier",
      co2Emissions: "400"
    },
    {
        land: "China",
        unternehmen: "Tesla",
        co2Emissions: "500"
      },
    {
      land: "Russland",
      unternehmen: "Gazprom",
      co2Emissions: "1200"
    },
    {
      land: "Frankreich",
      unternehmen: "Volkswagen",
      co2Emissions: "1500"
    },
    {
      land: "USA",
      unternehmen: "Volkswagen",
      co2Emissions: "1800"
    },
    {
      land: "China",
      unternehmen: "Mercedes",
      co2Emissions: "1600"
    },
    {
      land: "Mexiko",
      unternehmen: "Toyota",
      co2Emissions: "1200"
    },
    {
      land: "Brasilien",
      unternehmen: "BYD",
      co2Emissions: "1000"
    }
  ];

  const tbody_tr = document.querySelector('#co2daten');
  let rang = 1;
    co2EmissionDaten.forEach(element => {
    const clone_tbody_tr = tbody_tr.cloneNode(true);
    document.querySelector('#tbody').append(clone_tbody_tr);
    clone_tbody_tr.querySelector('#rang').innerText = rang;
    clone_tbody_tr.querySelector('#land').innerText = element.land;
    clone_tbody_tr.querySelector('#unternehmen').innerText = element.unternehmen;
    clone_tbody_tr.querySelector('#co2').innerText = element.co2Emissions;
    rang++;
  });
  tbody_tr.remove();

  function landFiltern() {
    const landInput = document.getElementById('landinput').value.toUpperCase();
   
    const table = document.getElementById('table');
    const rows = table.getElementsByTagName('tr');
  
    for (let i = 0; i < rows.length; i++) {
      const landSpalte = rows[i].getElementsByTagName('td')[0];
      
      if (landSpalte) {
        const landValue = landSpalte.innerText;
        
        if (landValue.toUpperCase().indexOf(landInput) > -1) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
    }
  }
  

  function unternehmenFiltern() {
    const unternehmenInput = document.getElementById('unternehmeninput').value.toUpperCase();
  
    const table = document.getElementById('table');
    const rows = table.getElementsByTagName('tr');
  
    for (let i = 0; i < rows.length; i++) {
      const unternehmenSpalte = rows[i].getElementsByTagName('td')[1];
  
      if (unternehmenSpalte) {
        const unternehmenValue = unternehmenSpalte.innerText;
  
        if (unternehmenValue.toUpperCase().indexOf(unternehmenInput) > -1) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
    }
  }
  
  function filtern() {
       const landInput = document.getElementById('landinput').value.toUpperCase();
      const unternehmenInput = document.getElementById('unternehmeninput').value.toUpperCase();
    
      const table = document.getElementById('table');
      const rows = table.getElementsByTagName('tr');
    
      for (let i = 0; i < rows.length; i++) {
        const landSpalte = rows[i].getElementsByTagName('td')[0];
        const unternehmenSpalte = rows[i].getElementsByTagName('td')[1];
    
        if (landSpalte && unternehmenSpalte) {
          const landValue = landSpalte.innerText;
          const unternehmenValue = unternehmenSpalte.innerText;
    
          if (
            landValue.toUpperCase().indexOf(landInput) > -1 &&
            unternehmenValue.toUpperCase().indexOf(unternehmenInput) > -1
          ) {
            rows[i].style.display = '';
          } else {
            rows[i].style.display = 'none';
          }
        }
      }
    }
   
   
    function sortTable(column) {
      const table = document.getElementById('table');
      const rows = Array.from(table.getElementsByTagName('tr'));
     
      rows.shift(); // Entferne den Tabellenkopf aus der Sortierung

      rows.sort((a, b) => {
        const zeileA = a.getElementsByTagName('td')[column].textContent.toUpperCase();
        const zeileB = b.getElementsByTagName('td')[column].textContent.toUpperCase();
        return zeileA.localeCompare(zeileB);
      });
    
      const tbody = document.getElementById('tbody');
      //tbody.innerHTML = ''; // Leere den Tabellenkörper für mehr sicherheit
  
      rows.forEach(row => {
        tbody.appendChild(row); // Füge die sortierten Zeilen zurück zur Tabelle hinzu
      });
      
    }
    