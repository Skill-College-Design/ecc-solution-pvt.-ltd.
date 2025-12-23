-- Add RESTRICTIVE policies to prevent UPDATE and DELETE on contacts table
CREATE POLICY "Contacts cannot be updated"
ON public.contacts
AS RESTRICTIVE
FOR UPDATE
USING (false);

CREATE POLICY "Contacts cannot be deleted"
ON public.contacts
AS RESTRICTIVE
FOR DELETE
USING (false);